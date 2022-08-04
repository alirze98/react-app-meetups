import React, { useEffect, useState } from "react";
import MeetUpList from "../components/meetup/meetUpList";

const AllMeetUpPage = () => {
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://react-project-87f5f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetUps(meetups);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(`this is an Error ${error}`);
      });
  }, []);

  return (
    <>
      {isLoading?(
        <section>
          <p>loading...</p>
        </section>
      ):<MeetUpList data={loadedMeetUps} />}
    </>
  );
};

export default AllMeetUpPage;
