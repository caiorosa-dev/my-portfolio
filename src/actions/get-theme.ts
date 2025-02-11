'use server';

import { Theme } from '@/types/theme';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'cr-theme';
const MAX_AGE = 60 * 60 * 24 * 30;
const DEFAULT_THEME: Theme = 'dark';

export async function getTheme() {
  const nextCookies = await cookies();

  return {
    theme: nextCookies.get(COOKIE_NAME)?.value as Theme || DEFAULT_THEME,
    saveTheme: async function (theme: Theme) {
      'use server';

      (await cookies()).set(COOKIE_NAME, theme, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
      });
    }
  }
}
