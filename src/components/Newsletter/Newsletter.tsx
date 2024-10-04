import React, { useState } from "react";
import styles from "./Newsletter.module.scss";
import Button from "../UIUnits/Button/Button";
import Input from "../UIUnits/Input/Input";
import clsx from "clsx";

type CProps = {
  title?: string;
  header?: string;
  transparent?: boolean;
}

const Newsletter: React.FC<CProps> = ({ title, header, transparent }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const subscribeHandler = () => {

  }

  return (
    <div
      className={clsx({
        [styles.newsletter]: true,
        [styles.noBg]: transparent,
      })}
    >
      {title && <h2>{title}</h2>}
      <h3>{header || "Stay Connected With Us"}</h3>
      <p>
        Stay informed and inspired with our official newsletter. Subscribe to receive the latest updates, insightful articles, 
        and news about our community’s spiritual, intellectual, and moral endeavors. 
      </p>
      <div>
        <Input
          title="First Name"
          type="NORMAL"
          value={fullName}
          onChange={(val) => setFullName(val)}
          placeholder="Please enter your first name"
        />
        <Input
          title="First Name"
          value={email}
          type="NORMAL"
          onChange={(val) => setEmail(val)}
          placeholder="Please enter your first name"
        />
        <Button
          label="Subscribe"
          variant="FILL_YELLOW"
          onClick={subscribeHandler}
        />
      </div>
    </div> 
  )
}

export default Newsletter;