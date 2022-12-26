import { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    myMessage: "merhaba dünya",
    number: 5,
  },
  "en-US": {
    myMessage: "hello world",
    number: 2,
  },
};

function Locale2() {
  const isLocalLang = localStorage.getItem("Lang");
  const defaultLocale = isLocalLang ? isLocalLang : navigator.language;
  const [Lang, setLang] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("Lang", Lang);
  }, [Lang]);

  return (
    <IntlProvider messages={messages[Lang]} locale={Lang}>
      <FormattedMessage id="myMessage" />
      <br />
      <FormattedNumber value={messages[Lang].number} />
      <br />
      <button onClick={() => setLang("tr-TR")}>TR</button>
      <button onClick={() => setLang("en-US")}>EN</button>
    </IntlProvider>
  );
}

export default Locale2;
