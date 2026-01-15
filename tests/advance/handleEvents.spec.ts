import { test, expect } from '@playwright/test';

test("Handle the tab that apprears after clicking" , async ({page}) =>{
  await page.goto("https://material.playwrightvn.com/06-new-tab.html");
  await page.getByRole("link",{name: "Tìm kiếm trên Google"}).click();
  const newPage = await page.waitForEvent("popup");
  await expect(newPage.locator("svg[aria-label='Google']")).toBeVisible();
  await page.bringToFront();
})

test("Handle the tab that apprears randomly" , async ({page}) =>{
  await page.goto("https://material.playwrightvn.com/021-page-random-open-new-page.html");
  const newPage = await page.waitForEvent("popup",{timeout:15_000});
  await newPage.locator("#registerBtn").click();
  await expect(newPage.getByText("Đăng kí thành công!")).toBeVisible();
  await expect(newPage.locator("#successMessage")).toContainText("Đăng kí");
})

test("Download the file that apprears after clicking", async ({page}) => {
  const promiseDownload = page.waitForEvent("download");
  await page.goto("https://material.playwrightvn.com/031-download.html");
  await page.getByText("Download Excel").click();
  const download = await promiseDownload;
  await download.saveAs("tests/advance/savedFiles/" + download.suggestedFilename())
})

test("Download the file that appears randomly", async ({page}) => {
  await page.goto("https://material.playwrightvn.com/031-download.html");

  page.on("download", download => {
   download.saveAs("tests/advance/savedFiles/" + download.suggestedFilename());
  })

  await page.getByRole('button', {name: "Start Delayed Download"}).click();
  await page.waitForTimeout(4000);
})

test("handle dialog opened ocassionally", async ({page}) => {
  await page.goto("https://material.playwrightvn.com/025-page-with-random-dialog.html");
  page.on("dialog", dialog => {
    dialog.dismiss();
  })

  await expect(page.locator("#countdown")).toBeVisible({timeout:10_000});
  await expect(page.locator("#countdown")).toHaveText("Bạn đã hủy thao tác!");
})

test("handle dialog opened after clicking", async ({page}) => {
  let task = "Task By Khanh";
  await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
  await page.getByPlaceholder("Enter a new task").fill(task)
  await page.getByRole("button",{name: "Add Task"}).click();
  await expect(page.locator("ul[id='task-list'] > li > span")).toHaveText(task);

  await page.getByRole("button", {name: "Delete"}).click();
  page.on("dialog", dialog => {
    dialog.accept();
  })
  await expect(page.locator("ul[id='task-list'] > li > span")).toBeHidden();

})