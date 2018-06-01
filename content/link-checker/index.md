## Running link checker

It is essential to ensure that hyperlinks within the site are properly setup and there are no broken links. Before committing, ensure that you run `linkchecker`.

### Install linkchecker

* Requires python 2.7 environment.

```
(maglev2) ~/p/p/maglev.io ❯❯❯ pip install linkchecker
Collecting linkchecker
Collecting requests>=2.2.0 (from linkchecker)
  Using cached requests-2.13.0-py2.py3-none-any.whl
Installing collected packages: requests, linkchecker
Successfully installed linkchecker-9.3 requests-2.13.0
```

* Start local website

```
~/p/p/maglev.io ❯❯❯ hugo server --watch --port=40000 --bind=0.0.0.0
Started building sites ...
ERROR 2017/04/17 13:57:45 Two or more menu items have the same name/identifier in Menu "main": "abstractions".
Rename or set an unique identifier.
Built site for language en:
0 draft content
0 future content
0 expired content
78 regular pages created
6 other pages created
0 non-page files copied
0 paginator pages created
0 tags created
0 categories created
total in 61 ms
Watching for changes in /Users/havishwa/projects/play/maglev.io/{content,static,themes}
Serving pages from memory
Web Server is available at //localhost:40000/ (bind address 0.0.0.0)
Press Ctrl+C to stop
```

* Run `linkchecker` and point it to local instance of the portal

```
(maglev2) ~/.p/v/m/l/p/s/linkcheck ❯❯❯ linkchecker http://localhost:40000                
INFO 2017-04-17 14:55:55,168 MainThread Checking intern URLs only; use --check-extern to check extern URLs.
LinkChecker 9.3              Copyright (C) 2000-2014 Bastian Kleineidam
LinkChecker comes with ABSOLUTELY NO WARRANTY!
This is free software, and you are welcome to redistribute it
under certain conditions. Look at the file `LICENSE' within this
distribution.
Get the newest version at http://wummel.github.io/linkchecker/
Write comments and bugs to https://github.com/wummel/linkchecker/issues
Support this project at http://wummel.github.io/linkchecker/donations.html

Start checking at 2017-04-17 14:55:55-007
10 threads active,   253 links queued,   10 links in   2 URLs checked, runtime 1 seconds
10 threads active,  1434 links queued,  342 links in  17 URLs checked, runtime 6 seconds
10 threads active,  3132 links queued,  941 links in  30 URLs checked, runtime 11 seconds
10 threads active,  4492 links queued, 1705 links in  43 URLs checked, runtime 16 seconds
10 threads active,  5780 links queued, 2785 links in  58 URLs checked, runtime 21 seconds
10 threads active,  6831 links queued, 4265 links in  74 URLs checked, runtime 26 seconds
10 threads active,  7511 links queued, 5947 links in  88 URLs checked, runtime 31 seconds
10 threads active,  7892 links queued, 7512 links in 103 URLs checked, runtime 36 seconds
10 threads active,  7746 links queued, 7658 links in 114 URLs checked, runtime 41 seconds
10 threads active,  7555 links queued, 8163 links in 121 URLs checked, runtime 46 seconds
 4 threads active,     0 links queued, 15724 links in 130 URLs checked, runtime 51 seconds

Statistics:
Downloaded: 3.11MB.
Content types: 2329 image, 12757 text, 0 video, 0 audio, 205 application, 97 mail and 340 other.
URL lengths: min=21, max=149, avg=50.

That's it. 15728 links in 130 URLs checked. 0 warnings found. 0 errors found.
Stopped checking at 2017-04-17 14:56:47-007 (51 seconds)
```

> NOTE: Linkchecker 9.3 has some issues which are fixed in their github repo but not upstreamed to pypi.

```
If you see this error:

(maglev2) ~/p/p/maglev.io ❯❯❯ linkchecker http://localhost:40000
This program requires Python requests 2.2.0 or later.

Just edit the __init__.py () in your local install, and delete the lines that are checking for request version.
ex: edit /Users/havishwa/.pyenv/versions/maglev2/lib/python2.7/site-packages/linkcheck/__init__.py
That check is string based and yields erroneous results.
```
