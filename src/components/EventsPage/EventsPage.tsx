import Footer from "../Footer/Footer";
import styles from "./EventsPage.module.scss";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import EventCard from "../UIUnits/Cards/EventCard/EventCard";
import { useState } from "react";
import Input from "../UIUnits/Input/Input";
import Button from "@/src/components/UIUnits/Button/Button";

const events = [
  {
    imageUrl: "https://link.to/al-usrah-event-image",
    tag: "Al-Usrah Program",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "past",
  },
  {
    imageUrl: "https://link.to/al-usrah-event-image",
    tag: "Al-Usrah Program",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "upcoming",
  },
  {
    imageUrl: "https://link.to/al-usrah-event-image",
    tag: "Al-Usrah Program",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "past",
  },
  {
    imageUrl: "https://link.to/al-usrah-event-image",
    tag: "Al-Usrah Program",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "upcoming",
  },
  {
    imageUrl: "https://link.to/orientation-event-image",
    tag: "Orientation Event",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "past",
  },
  {
    imageUrl: "https://link.to/jihad-week-event-image",
    tag: "Jihad Week - Opening Ceremony",
    title:
      "Navigating Course Registration, Electives, Prerequisites For Success",
    speaker1: "Brother Muthohir (Pilot)",
    speaker2: "Sister Rukoyat Areh",
    date: "Saturday, October 21, 2023",
    link: "https://link.to/event-recording",
    eventType: "upcoming",
  },
];
const EventsPage = () => {
  const [eventType, setEventType] = useState("past");

  const handlePastEvents = () => {
    setEventType("past");
  };

  const handleUpcomingEvents = () => {
    setEventType("upcoming");
  };

  //  fullName, phone number, email, adress, message
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const subscribeHandler = () => {
    console.log(fullName, email);
  };

  return (
    <div>
      <PageHeader title="Events" />
      <section className={styles.eventsIntro}>
        <h2>Past And Upcoming Events</h2>
        <p>
          MSSN OAU makes an effort to ensure that her members are not only
          bookworms, but also have a good time. So, at MSSN OAU, we organize a
          variety of social events such as hangouts, get together, dinner night,
          and other programs aimed at fostering social relationships.
        </p>
      </section>
      <section className={styles.eventTypeButtons}>
        {/* add .active style to whichever one is active*/}

        <button
          onClick={handlePastEvents}
          className={eventType === "past" ? styles.active : ""}
        >
          Past Events
        </button>
        <button
          onClick={handleUpcomingEvents}
          className={eventType === "upcoming" ? styles.active : ""}
        >
          Upcoming Events
        </button>
      </section>
      <section className={styles.eventsContainer}>
        <div className={styles.events}>
          {events
            .filter((event) => event.eventType === eventType)
            .map((event, index) => (
              <EventCard
                key={index}
                details={[]}
                imageUrl={event.imageUrl}
                id={event.title}
                // tag={event.tag}
                title={event.title}
                // speaker1={event.speaker1}
                // speaker2={event.speaker2}
                date={event.date}
                // link={event.link}
              />
            ))}
        </div>
      </section>

      <section className={styles.newsletterContainer}>
        <div className={styles.container}>
          <div className={styles.newsletterText}>
            <h2>Subscribe To An-Nur Press Blog</h2>
            <p>
              Stay informed and inspired with our official newsletter. Subscribe
              to receive the latest updates, insightful articles, and news about
              our community’s spiritual, intellectual, and moral endeavors.
            </p>
          </div>

          <form className={styles.newsletterForm}>
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
                placeholder="Please enter your email address"
            />
            <Button
                label="Subscribe"
                variant="FILL_YELLOW"
                onClick={subscribeHandler}
            />
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default EventsPage;
