import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const locale = cookieStore.get('locale')?.value;

  if (!locale) {
    return {
      locale: 'en',
      messages: (await import(`../../messages/en.json`)).default
    };
  }

  const jsonMessages = (await import(`../../messages/${locale}.json`)).default

  return {
    locale,
    messages: jsonMessages
  };
});