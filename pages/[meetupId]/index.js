import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The first meetup description."
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The first meetup description",
      },
    },
  };
}

export default MeetupDetails;
