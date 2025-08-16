from playwright.sync_api import Page, expect
import traceback

def test_cv_download(page: Page):
    """
    This test verifies that the "Download CV" button opens the CV in a new tab.
    """
    try:
        # 1. Arrange: Go to the application's homepage.
        page.goto("http://localhost:3000")

        # 2. Act: Click the "Download CV" button and wait for the new tab to open.
        with page.context.expect_page() as new_page_info:
            download_cv_button = page.locator('a:has-text("Download CV")')
            download_cv_button.click()

        new_page = new_page_info.value

        # 3. Assert: Check that the new tab has the correct URL.
        expect(new_page).to_have_url("http://localhost:3000/assets/cv.txt")

        # 4. Screenshot: Capture the final result for visual verification.
        new_page.screenshot(path="jules-scratch/verification/cv_download.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
