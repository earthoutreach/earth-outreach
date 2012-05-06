import csv
import codecs
from lxml import etree, objectify

class UTF8Recoder:
    """
    Iterator that reads an encoded stream and reencodes the input to UTF-8
    """
    def __init__(self, f, encoding):
        self.reader = codecs.getreader(encoding)(f)

    def __iter__(self):
        return self

    def next(self):
        return self.reader.next().encode("utf-8")

class UnicodeReader:
    """
    A CSV reader which will iterate over lines in the CSV file "f",
    which is encoded in the given encoding.
    """

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        f = UTF8Recoder(f, encoding)
        self.reader = csv.reader(f, dialect=dialect, **kwds)

    def next(self):
        row = self.reader.next()
        return [unicode(s, "utf-8") for s in row]

    def __iter__(self):
        return self

class UnicodeWriter:
    """
    A CSV writer which will write rows to CSV file "f",
    which is encoded in the given encoding.
    """

    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        # Redirect output to a queue
        self.queue = cStringIO.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()

    def writerow(self, row):
        self.writer.writerow([s.encode("utf-8") for s in row])
        # Fetch UTF-8 output from the queue ...
        data = self.queue.getvalue()
        data = data.decode("utf-8")
        # ... and reencode it into the target encoding
        data = self.encoder.encode(data)
        # write to the target stream
        self.stream.write(data)
        # empty queue
        self.queue.truncate(0)

    def writerows(self, rows):
        for row in rows:
            self.writerow(row)



def unicode_csv_reader(utf8_data, dialect=csv.excel, **kwargs):
    csv_reader = csv.reader(utf8_data, dialect=dialect, **kwargs)
    for row in csv_reader:
        yield [unicode(cell, 'utf-8') for cell in row]
            
            
# create a factory object for creating objects in the KML namespace
XML = objectify.ElementMaker(annotate=False)

en = XML.messagebundle();
pt = XML.messagebundle();
en.append(XML.msg('en', name = 'PICKER_LANG'))
pt.append(XML.msg('pt-BR', name = 'PICKER_LANG'))

i = 0
for row in unicode_csv_reader(open('translations.csv', 'rb'), delimiter=','):
  if (i == 0):
    i += 1
  else:
    msg, _translated, ptbr, eng = row
    en.append(XML.msg(eng, name = msg))
    pt.append(XML.msg(ptbr, name = msg))
  
 
f_out_en = open('en_ALL.xml', 'w')
f_out_pt = open('pt_ALL.xml', 'w')

f_out_en.write(etree.tostring(en, encoding='UTF-8', pretty_print=True))
f_out_pt.write(etree.tostring(pt, encoding='UTF-8', pretty_print=True))

  