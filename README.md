# Situation (basic store setup)

1. We have an empty angular app with eagerly loaded module called ```posts```
2. We want to add @ngrx/store and @ngrx/store-devtools
3. Get familiar with Redx DevTools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
4. Add minimal setup to start using store
5. Check that state is properly initialized using store-devtools
6. Display data from store in ```PostListComponent```

---

# Situation (extending initial state)

1. Create interface describing posts state. See ```State``` in posts.reducer.ts-node
2. Create ```initialState``` and use it to initalize your store.

---

# Situation (display posts state in component)

1. Select state from store and display it (no typing at the moment)
