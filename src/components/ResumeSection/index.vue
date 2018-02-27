<template>
  <div class="resumeSection">
    <SectionCard icon="wizhat" title="Skills">
      <p>
        TODO
      </p>
    </SectionCard>
    <SectionCard icon="work" title="Experience">
      <SectionCardSection>
        <h3>Full Stack Developer at Socity</h3>
        <h4>2017 - Current</h4>
        <ul>
          <li>
            Planned and controlled the development of the front-end, back-end, and database of the social web and mobile app
          </li>
          <li>
            Hosted continuous integration environment and containerized server infrastructure under Linux
          </li>
        </ul>
      </SectionCardSection>
      <SectionCardSection>
        <h3>Research Assistant / Developer at Sheridan College (Co-op)</h3>
        <h4>March 2016 - August 2016</h4>
        <ul>
          <li>
            Assisted creative teams with ideation possibilities
          </li>
          <li>
            Developed project demo with Unity and Kinect motion tracking for 360 degree video control
          </li>
        </ul>
      </SectionCardSection>
      <SectionCardSection>
        <h3>Enterprise Technical Operations Center Trainee at CGI (Co-op)</h3>
        <h4>September 2015 - December 2015</h4>
        <ul>
          <li>
            Provided server monitoring and surveillance for various clients
          </li>
          <li>
            Addressed and acted upon problem ticket issues
          </li>
          <li>
            Created and modified knowledge database articles for distributing technical knowledge among team members
          </li>
          <li>
            Approve and applied change requests
          </li>
        </ul>
      </SectionCardSection>
      <SectionCardSection>
        <h3>Junior IT Administrator at SDI Marketing (Co-op)</h3>
        <h4>January 2015 - March 2015</h4>
        <ul>
          <li>
            Supported system adminstrator with monitoring and configuring tech
          </li>
          <li>
            Supported employees with tech issues
          </li>
          <li>
            Developed and curated digital signage using Xibo
          </li>
          <li>
            Developed reporting scripts for Microsoft Exchange
          </li>
          <li>
            Created Bash/Powershell scripts for file organization
          </li>
          <li>
            Managed equipment inventory through Salesforce
          </li>
        </ul>
      </SectionCardSection>
      <SectionCardSection>
        <h3>Web Developer at Ryan Design</h3>
        <h4>April 2014 - August 2014</h4>
        <ul>
          <li>
            Developed website front ends for clients
          </li>
          <li>
            Created and maintained registration systems and respective databases
          </li>
        </ul>
      </SectionCardSection>
    </SectionCard>
    <SectionCard icon="school" title="Education">
      <SectionCardSection>
        <h3>Software Development and Network Engineering Co-op at Sheridan College</h3>
        <h4>2016</h4>
        <ul>
          <li>
            Studied Computer Architecture, Object Oriented Programming, Enterprise Software Development, Business Systems and Security, Networking and Network Security
          </li>
          <li>
            Programming languages and frameworks: Java/JavaEE, C#/.Net, Javascript, C, C++, Assembly, PHP, SQL via MySQL and PL/SQL
          </li>
        </ul>
      </SectionCardSection>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
import SectionCardSection from '@/components/SectionCard/Section';

export default {
  name: 'ResumeSection',
  components: {
    SectionCard,
    SectionCardSection
  }
};
</script>

<style scoped>
.resumeSection {

}
</style>
