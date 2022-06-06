import { Container } from "react-bootstrap"

function PrivacyPolicy() {
  return (
    <Container className="my-5 py-5 h-100">
      <img src="https://nuworks.ph/static/images/logo/privacy_policy.png" alt="" width="550px" />
      <p className="mt-5">Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p>
      <ul className="mt-5">
          <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
          <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
          <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
          <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
          <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to- date.</li>
          <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
          <li>We will make readily available to customers' information about our policies and practices relating to the management of personal information.</li>
      </ul>
      <p className="mt-5">We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p>
    </Container>
  );
}

export default PrivacyPolicy;
