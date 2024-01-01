import { test, expect } from '@playwright/test';
import { time } from 'console';
import exp from 'constants';
import { TIMEOUT } from 'dns';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.koctas.com.tr/');

})

test.describe("Koçtaş Testi", () => {


    test('Giriş İşlemleri Testi', async ({ page }) => {


        //Üye ol veya giriş yap avatarına tıkla
        await page.click("svg[class='icon-member font-size-10']");


        //Giriş yap seçeneğine tıkla
        const loginLink = await page.waitForSelector('//a[text()="Giriş Yap"]');
        await loginLink.click();


        //Url de login var mı kontrol ediyor
        await expect(page).toHaveURL('https://www.koctas.com.tr/login');


        //mail ve şifre girişi
        await page.fill('#j_username', 'denemekoctas@gmail.com');
        await page.fill('#j_password', 'deneme123');


        //Giriş yap butonuna tıklar
        await page.click('#loginButton');


    })

    test('Avatar kontrol', async ({ page }) => {

        //Hesabıma giriş yapıldığı görünür
        await expect(page.locator("svg[class='icon-member font-size-10']")).toBeVisible({ timeout: 10000 });

    })

})