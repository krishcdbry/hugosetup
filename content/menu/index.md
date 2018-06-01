## Adding menuitems
### Top menu item
1. Go to the `config.toml` file
2. Go to the `# Top Menu Items` comment
3. Add a top menu item like this:

```
[[menu.main]]
    name = "Top menu name"      
    url = "/top/menu/subpage/"
    identifier = "unique-identifier"
    weight = 10
```
|Attribute  |Type   |Details                                            |
|-----------|-------|-------------------------------------------------- |
|name       |string |Name that will show up in the top menu.            |  
|url        |string |Explicit url to wich the page should point to.     |
|identifier |string |Should be **unique** for every item!               |
|weight     |int    |For the order of menu items, lower is more on top  |

### Side Menu item
1. Go to the `config.toml` file
2. Go to the `# Side Menu Items` comment
3. Add a side menu item like this:

```
[[menu.main]]
    name = "Side menu name"      
    url = "/side/menu/subpage/"
    parent = "parent-identifier"
    identifier = "unique-sub-identifier"
    weight = 10
```
|Attribute  |Type   |Details                                            |
|-----------|-------|-------------------------------------------------- |
|name       |string |Name that will show up in the side menu.           |
|parent     |string |Identifier of the top menu item under wich this page resides|
|url        |string |Explicit url to wich the page should point to.     |
|identifier |string |Should be **unique** for every item!               |
|weight     |int    |For the order of menu items, lower is more on top  |

### Side submenu item
1. Go to the page that should be added to the side menu in the `Content` folder.
2. At the top of the page add this to the parameter:
```
menu:
    main:
        name: "Side menu name"
        parent: "unique-sub-identifier"
        weight: 20
```
|Attribute  |Type   |Details                                            |
|-----------|-------|-------------------------------------------------- |
|name       |string |Name that will show up in the sub menu.           |
|parent     |string |Identifier of the side menu item under wich this page resides|
|weight     |int    |For the order of menu items, lower is more on top  |
