## Versioning
1. Go to the pages where you want subversioning on.
```
-api
--test1.md
--test2.md
```
2. Create subfolders for every version, and put copies of the files in them. **Every version subfolder should start with the letter v and an integer (v1.0.0, v23.43.bla)**
```
-api
--v1.0.0
---test1.md
---test2.md
--v2.0.0
---test1.md
---test2.md
```

3. Add them to the sidemenu like you would do with a normal file. **Don't forget to give every page a unique id and different weight. Weight will determain position in the dropdown menu**


##### Example:
**api/v1.0.0/test1.md**
```
menu:
    main:
        name: "Test01"
        parent: "unique-sub-identifier"
        identifier: 'test01-v1' #Different from v2.0.0
        weight: 20 #Different from v2.0.0
```
**api/v2.0.0/test1/md**
```
menu:
    main:
        name: "Test02"
        parent: "unique-sub-identifier"
        identifier: 'test01-v2' #Different from v1.0.0
        weight: 30 #Different from v1.0.0
```

