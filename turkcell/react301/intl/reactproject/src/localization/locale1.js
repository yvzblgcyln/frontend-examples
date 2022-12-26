import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  TR: {
    myMessage: "merhaba dünya { count }",
    number: 5,
  },
  US: {
    myMessage: "hello world { count }",
    number: 2,
  },
};

function Locale1() {
  const [Lang, setLang] = useState("TR");
  return (
    <IntlProvider messages={messages[Lang]} locale="TR">
      <FormattedMessage id="myMessage" values={{ count: 5 }} />
      <br />
      <FormattedNumber value={messages[Lang].number} />
      <br />
      <button onClick={() => setLang("TR")}>TR</button>
      <button onClick={() => setLang("US")}>EN</button>
    </IntlProvider>
  );
}

export default Locale1;
