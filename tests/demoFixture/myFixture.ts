import { test as base, Page } from '@playwright/test';

const test = base.extend<{homePage: Page}>({
    homePage: async({page}, use) => {
        console.log("Login")

        await use(page);

        console.log("Logout")
    }
})

export {test};
