import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";
import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import Head from "next/head";

const Index = props => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBar
      MainBarHeader="IT Training, Consulting and Workshops in Europe"
      MainBarText="I'm boosting effectivity & productivity of software development teams by using tools which lead to faster development and reliable operation of software products."
    ></MainBar>
    <StatisticBar
      NumberOfPeople="650+"
      NumberOfPeopleHeader="Training attendees"
      NumberOfCompanies="100+"
      NumberOfCompaniesHeader="Companies trained"
      NumberOfLectures="150+"
      NumberOfLecturesHeader="Training sessions"
    />

    <div className="container">
      <LectureImgMdLg lang={props.site.lang} LectureImgHeader="My Training" />
      <LectureImgSm lang={props.site.lang} LectureImgHeader="My Training" />
      <TextWithImg TextWithImgHeader="About me">
        My name is Ondrej, I am a software engineer and DevOps consultant,
        architect &amp; lecturer. I lead mostly Docker courses and CI; they are
        both closely interrelated. I have worked for small companies, startups
        to big corporations. I have four years of experience with training.
        <br />
        <br />
        <h4>Training</h4>
        All courses are perform as workshops (hands-on). They are build on my
        long-term knowledge and experience in developing, testing and running
        software projects.
      </TextWithImg>
      <CompaniesBar lang={props.site.lang} />
    </div>
  </div>
);

export default Index;
