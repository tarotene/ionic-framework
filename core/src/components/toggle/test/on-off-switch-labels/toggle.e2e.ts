import { expect } from '@playwright/test';
import { test } from '@utils/test/playwright';

test.describe('toggle: onOffSwitchLabels', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/src/components/toggle/test/on-off-switch-labels`);
  });

  test('should not have visual regressions', async ({ page }) => {
    await page.setIonViewport();

    expect(await page.screenshot()).toMatchSnapshot(`toggle-switch-labels-diff-${page.getSnapshotSettings()}.png`);
  });

});
