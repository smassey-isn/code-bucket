#!/usr/bin/python

import os, sys, getopt
from lib.weasyprint import HTML, CSS

verbose = False

def usage():
    print 'Usage: ' + sys.argv[0] + ' --inputhtml | -i [file] --inputcss | -s [file] --inputheadertemplate | -t [file] --header-pos-x | -x [csspos] --header-pos-y | -y [csspos] --excluded-pages | -e [commalistofints] --outputpdf | -o [file] --verbose | -v'

def main():
    global verbose
    try:
        opts, args = getopt.getopt(sys.argv[1:], "hi:s:t:x:y:e:o:v", ["help", "inputhtml=", "inputcss=", "inputheadertemplate=", "header-pos-x=", "header-pos-y=", "excluded-pages=", "outputpdf="])
    except getopt.GetoptError as err:
        print str(err)
        usage()
        sys.exit(2)
    inputhtml = ''
    inputcss = ''
    inputheadertemplate = ''
    headerposx = '1cm'
    headerposy = '1cm'
    outputpdf = ''
    excludedpages = []
    for o, a in opts:
        if o in ("-v", "--verbose"):
            Verbose = True
        elif o in ("-h", "--help"):
            usage()
            sys.exit()
        elif o in ("-i", "--inputhtml"):
            inputhtml = a
        elif o in ("-s", "--inputcss"):
            inputcss = a
        elif o in ("-t", "--inputheadertemplate"):
            inputheadertemplate = a
        elif o in ("-x", "--header-pos-x"):
            headerposx = a
        elif o in ("-y", "--header-pos-y"):
            headerposy = a
        elif o in ("-e", "--excluded-pages"):
            excludedpages = a.split(',')
        elif o in ("-o", "--outputpdf"):
            outputpdf = a
        else:
            assert False, "unhandled option"
    html2pdf(inputhtml, inputcss, inputheadertemplate, headerposx, headerposy, excludedpages, outputpdf)

def get_page_body(boxes):
    for box in boxes:
        if box.element_tag == 'body':
            return box

        return get_page_body(box.all_children())


def html2pdf(inputhtml, inputcss, inputheadertemplate, headerposx, headerposy, excludedpages, outputpdf):
    global verbose
    if os.path.isfile(inputhtml) == False:
        raise ValueError('ERROR: inputhtml is not a file or is inaccessible')
    if inputcss and os.path.isfile(inputcss) == False:
        raise ValueError('ERROR: inputcss is not a file or is inaccessible')
    if inputheadertemplate and os.path.isfile(inputheadertemplate) == False:
        raise ValueError('ERROR: inputheadertemplate is not a file or is inaccessible')
    if not outputpdf:
        raise ValueError('ERROR: no output PDF filename provided')

    exists_links = False

    html = HTML(inputhtml)
    if inputcss:
        css = CSS(inputcss)
        main_doc = html.render(stylesheets=[CSS(inputcss)])
    else:
        main_doc = html.render()

    if inputheadertemplate:
        with open(inputheadertemplate, "r") as inputheaderfile:
            inputheaderhtml = inputheaderfile.read()

        inputheaderhtml = HTML(string="<div class=\"header\">" + inputheaderhtml + "</div>")
        headercss = ".header {position:fixed; top:%(headerposy)s; left:%(headerposx)s;}" % locals()
        header = inputheaderhtml.render(stylesheets=[CSS(string=headercss)])

        header_page = header.pages[0]
        exists_links = exists_links or header_page.links
        header_body = get_page_body(header_page._page_box.all_children())
        header_body = header_body.copy_with_children(header_body.all_children())

        for i, page in enumerate(main_doc.pages):
            if str(i+1) in (excludedpages):
                continue

            page_body = get_page_body(page._page_box.all_children())

            page_body.children += header_body.all_children()

            if exists_links:
                page.links.extend(header_page.links)

    # TODO: implement footer support

    main_doc.write_pdf(target=outputpdf)

if __name__ == "__main__":
    main()
