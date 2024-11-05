import Footer from "../Footer/Footer";
import styles from "./DonatePage.module.scss";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import Input from "../UIUnits/Input/Input";
import Button from "../UIUnits/Button/Button";
import { useState } from "react";
const DonatePage = () => {
  const reasons = [
    {
      title: "Ramadan Feeding",
      description:
        "Donation contribute to the upkeep and improvement of our facilities, providing a comfortable and conducive environment for all activities.",
    },
    {
      title: "Student Welfarism",
      description:
        "Donation contribute to the upkeep and improvement of our facilities, providing a comfortable and conducive environment for all activities.",
    },
    {
      title: "Community Support",
      description:
        "Funds are used to support members in need, ensuring everyone has the opportunity to benefit from MSSN OAU offerings",
    },
    {
      title: "Facility Maintenance",
      description:
        "Donation contribute to the upkeep and improvement of our facilities, providing a comfortable and conducive environment for all activities.",
    },
    {
      title: "Program Funding",
      description:
        "Your donation support regular and special programs, ensuring a wide range of activities and events for personal and community development",
    },
    {
      title: "Resource Allocation",
      description:
        "Contributions help us acquire essential materials and resources for spiritual, intellectual, and moral growth",
    },
  ];

  //  fullName, phone number, email, adress, message
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const subscribeHandler = () => {
    console.log(fullName, email, message);
  };

  return (
    <div>
      <PageHeader title="Donate" />
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>
          Donate For The Cause Of Allah And Earn Great Reward
        </h2>
        <p>
          Donation is one of the most beloved deeds to Almighty Allah, and
          giving Donation is a source of great blessings in this life and the
          next.
        </p>
        <p>
          The Prophet (peace be upon him) said{" "}
          <span className={styles.quote}>
            &ldquo;Sadaqah extinguishes sin as water extinguishes fire&rdquo;
          </span>
          . He also said that Allah offers relief on the Day of Judgement for
          those who give sadaqa:{" "}
          <span className={styles.quote}>
            &ldquo;The believer&apos;s shade on the Day of Resurrection will be
            their charity&rdquo;
          </span>{" "}
          (Hadith, Tirmidhi).
        </p>
        <p>
          <span className={styles.quote}>
            &ldquo;Those who believe, and do deeds of righteousness, and
            establish regular prayers and regular charity, will have their
            reward with their Lord. On them shall be no fear, nor shall they
            grieve.&rdquo;
          </span>{" "}
          (Q2:277)
        </p>
      </div>

      <div className={styles.sectionOne}>
        <div className={styles.container}>
          <div className={styles.sectionOneTitle}>
            <h1>Reason For Donation</h1>
            <p>
              Your Donation to <strong>MSSN OAU</strong> Branch will help in the
              covering of the following:
            </p>
          </div>
          <div className={styles.sectionOneContent}>
            <ul className={styles.donationReasons}>
              {reasons.map((reason) => (
                <li className={styles.reason} key={reason.title}>
                  <strong>{reason.title}: </strong>
                  <span>{reason.description}</span>
                </li>
              ))}
            </ul>

            <div className={styles.accountDetails}>
              <h3>ACCOUNT DETAILS</h3>
              <p>
                <strong>Account Name:</strong> Muslim Students&apos; Society Of
                Nigeria, OAU
              </p>
              <p>
                <strong>Bank Name:</strong> GTBank
              </p>
              <p>
                <strong>Account Number:</strong> 0217023039
              </p>
            </div>
          </div>
          <div className={styles.annualDue}>
            <p>
              Not yet paid your Annual Due of #2000? <a href="#">Pay now</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.container}>
          <div className={styles.sectionTwoTitle}>
            <h3>Reach out to Us</h3>
            <p>
              Do you have any quaestion to ask us? <br /> Or do you want to
              support us in any way? <br /> Send a message.
            </p>
          </div>
          <div className={styles.sectionTwoContent}>
            <form action="">
              <Input
                title="Full Name"
                type="NORMAL"
                value={fullName}
                onChange={(val) => setFullName(val)}
                placeholder="Please enter your first name"
              />
              <Input
                title="Email"
                value={email}
                type="NORMAL"
                onChange={(val) => setEmail(val)}
                placeholder="Please enter your email"
              />
              <Input
                title="Phone Number"
                value={phone}
                type="NORMAL"
                onChange={(val) => setPhone(val)}
                placeholder="Please enter your phone number"
              />
              <Input
                title="Message"
                value={phone}
                type="TEXTAREA"
                onChange={(val) => setMessage(val)}
                placeholder="Message(optional)"
              />
              <Button
                label="Send Message"
                variant="FILL_YELLOW"
                onClick={subscribeHandler}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
