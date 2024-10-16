import React from "react";
import Footer from "../../Footer/Footer";
import PageHeader from "../../UIUnits/PageHeader/PageHeader";
import CallIcon from "@/public/icons/svgs/phone_1.svg"
import WhatsappIcon from "@/public/icons/svgs/whatapp_1.svg"
import MailIcon from "@/public/icons/svgs/mail_1.svg"
import styles from './ExcosGroup.module.scss';

const RAND_DATA = [
  {
    id: 0,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  }]

export interface ExcoType {
  id: number;
  name: string;
  post: string;
  department: string;
  level: string;
  phone_no: string;
}

type ComponentProps = {
  title: string;
  group: ExcoType[];
}

const ExcosGroup: React.FC<ComponentProps> = ({ title, group }) => {
  return (
    <div className={styles.group}>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>

      <div className={styles.tContainer}>
        <table>
          <tr className={styles.header}>
            <th>S/N</th>
            <th>NAME</th>
            <th>POST</th>
            <th>DEPARTMENT</th>
            <th>LEVEL</th>
            <th>PHONE NO</th>
          </tr>

          {group.map((exco, i) => (
            <tr key={exco.id}>
              <td>{i + 1}.</td>
              <td>{exco.name}</td>
              <td>{exco.post}</td>
              <td>{exco.department}</td>
              <td>{exco.level}</td>
              <td>{exco.phone_no}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default ExcosGroup;
