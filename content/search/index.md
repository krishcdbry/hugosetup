## Search

Site search is implemented by generating JSON index files. Essentially `buildSearchIndex.js` creates pages.json and searchIndex.json files by going through the contents of the repo. In the live site, lunr.js is used to provide textual search based on the index files generated.

To update the index, run buildSearchIndex.js. This is a nodejs script and has dependencies listed in package.json file.

> NOTE: The below step is auto run in the documentation server. Development machines need not do this, unless you want to see the latest search on your local doc instance.

```
~/p/p/maglev.io ❯❯❯ node -v                                                                                                                                                                                                              master ✚ ◼
v6.10.0

# Run npm install to get all dependencies in package.json.
~/p/p/maglev.io ❯❯❯ npm install                                                                                                                                                                                                        master ✚ ✱ ◼

~/p/p/maglev.io ❯❯❯ node ./buildSearchIndex.js                                                                                                                                                                                           master ✚ ◼
...
...
...
Path [/resources/downloads/] was added to searchindex.
Path [/resources/roadmap] was added to searchindex.
Path [/search] was added to searchindex.
pages.json file was saved!
searchIndex.json file was saved!

```

After this, when `hugo` is run, it copies over the pages.json and searchIndex.json into the document root and thereby made available for search functionality.

