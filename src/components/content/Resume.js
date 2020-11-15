import React from "react";

// import Timeline from "./timeline/Timeline";
import { Divider, ResumeCard, TextChips, DegreeCard } from "../util/Util";

import gs_logo from "../../static/img/gs.png";
import trc_logo from "../../static/img/trc.png";
import cvent_logo from "../../static/img/cvent.png";
import hcl_logo from "../../static/img/hclt.png";
import edct_logo from "../../static/img/edct.png";
import skills_logo from "../../static/img/skills.png";

export default function Resume() {
  return (
    <div className="resume-main">
      {/* <div className="up-box">
        <Timeline />
      </div> */}
      <h1 style={{color:"grey", margin:"20px 0 20px"}}>Professional Experience -</h1>
      <div className="up-box">
        <ResumeCard
          title="Tower Research Capital"
          role="Limestone : Dev Automation - Tools"
          dimg={trc_logo}
          dimg_siz="30:90"
          img_top="10px"
          dur="Jul, 2019 – Present"
        />

        <Divider />
        <br />
        <span style={{ color: "grey" }}>Work & Responsibilities</span>
        <br />
        <ul>
          <li>
            Responsible for dev automation tasks, report generation,
            upgrading/creating scripts, setting up jupyter notebooks, config
            changes, preparing historical data, and releasing binaries to
            production.
          </li>
          <li>
            Working closely with china traders, setting up china products,
            analyzing market data, generating trends(fills vs captures from
            sources)for analysis, setting up an environment for trading queries
            including market data.
          </li>
          <li>
            Solely responsible for migrating tickers, their expiry/roll logics
            from native Cpp codebase to Python for global trading – taking care
            of pre-production and post-production tests and updates.
          </li>
          <li>
            Setting up a platform for analyzing the Tick-To-Trade i.e.
            calculating the time between receiving the first packet of market
            data and sending an order out to exchange. This also includes
            analyzing time-lapse while processing through different
            applications/environments.
          </li>
          <li>
            Writing daily scripts for latency comparison and setting up the
            dashboards in grafana/kibana – comparing different feeds of raw
            market-data, wireless data from different vendors across different
            paths to be used by traders to find the best-optimized path to
            execute trades.
          </li>
          <li>
            Working with different teams across the regions over
            mails/calls/group-chat/handover-calls to support and maintain a
            reliable and stable trading infrastructure.
          </li>
        </ul>
      </div>
      <div className="up-box">
        <ResumeCard
          title="Goldman Sachs"
          role="Site Reliability Engineer"
          dimg={gs_logo}
          dimg_siz="35:40"
          img_top="10px"
          dur="Aug, 2017 – May, 2019"
        />
        <Divider />
        <br />
        <span style={{ color: "grey" }}>Work & Responsibilities</span>
        <br />
        <ul>
          <li>
            Handling configurations, testing, releases, and monitoring of
            mission-critical trading applications and the respective back end
            systems including debugging, code analysis, and diagnosis of codes
            written in C++, JAVA, Python, Perl & Bash.
          </li>
          <li>
            Automating day to day manual tasks using Python, Unix Shell, and
            in-house tools/applications.
          </li>
          <li>
            Primarily taking care of applications like Exchange Connectivity,
            Order Management System (OMS), RefData (product setup in reference
            Data), and RMS (to validate, enrich, and execute orders).
          </li>
          <li>
            Handling trade matching queries from brokers & clients, working with
            Back Office for Trade validation, resolving the execution breaks
            between different systems & and also responsible for resolving trade
            settlement queries from the Booking team/OPS.
          </li>
          <li>
            Setting up the new Brokers in PROD including flow testing, changing
            control limits on clients/product requirements for validation,
            enrichment, and trading.
          </li>
          <li>
            Responsible for communicating to senior managers, MD & Business
            owners in case of any major issue impacting trading with it’s
            RCA(post-resolution). Compiling detailed post-mortem explaining the
            original issue, impact on trading/clients, immediate resolution, and
            follow-up action point to avoid occurring again.
          </li>
          <li>
            Responsible for developing and maintaining production tools, deploy
            code updates into test and production environments, and work to roll
            environments forward including coordinating changes with application
            owners to ensure minimal user impact.
          </li>
          <li>
            Successfully uplifted the test orders framework(to check
            connectivity before SOD) and set-up new tests to support
            Institutional Flow and Emerging markets (NGM, Dubai, and Russia).
          </li>
        </ul>
      </div>
      <div className="up-box">
        <ResumeCard
          title="Cvent India"
          role="Application Engineer - Events platform"
          dimg={cvent_logo}
          dimg_siz="50:90"
          img_top="0px"
          dur="April, 2017 – July, 2017"
        />
        <Divider />
        <br />
        <span style={{ color: "grey" }}>Work & Responsibilities</span>
        <br />
        <ul>
          <li>
            Debugging, code analysis, and Diagnosis of code issues written in
            HTML, CSS, JS, .NET, SQL Server
          </li>
          <li>
            Engaging sprint teams on bugs for early resolution using JIRA for
            application enhancement and setting up log monitoring using Splunk
            for our application support team.
          </li>
        </ul>
      </div>
      <div className="up-box">
        <ResumeCard
          title="HCL Technologies"
          role="Software Engineer - CITIBank Investor Services project"
          dimg={hcl_logo}
          dimg_siz="60:60"
          img_top="0px"
          dur="Feb, 2015 – Apr, 2017"
        />
        <Divider />
        <br />
        <span style={{ color: "grey" }}>Work & Responsibilities</span>
        <br />
        <ul>
          <li>
            Role: Engineer for CITI - ICG Tech Production Services- Investor
            Services Driving Optimization initiatives to reduce Man hours that
            include Automating manual monitoring (Complete, Partial), Reducing
            unwanted alerts, Work Prioritization Initiatives (Moving the work
            from the high-cost center to low-cost center i.e. from L2  L1 or L3
             L2)
          </li>
          <li>
            Creating a dashboard, setting up monitoring alerts over ITRS to
            automate manual monitoring done by the L1 team, and hence reducing
            man-hours.
          </li>
          <li>
            Supporting 5 business streams, 12 applications consisting of 100+
            sub-applications.
          </li>
          <li>
            Debugging, code analysis, and diagnosis of codes written in C++,
            UNIX Shell, Python, PERL, JAVA.
          </li>
          <li>
            Practicing In-depth Incident management and problem management
            procedures - finding RCA, suggesting, creating & implementing
            short-term resolutions for interim resolution, finding long-term
            resolutions, setting up monitoring/alerts, and publishing Post
            Mortem reports.
          </li>
          <li>
            Managing upcoming changes, releases, migration, and upgradations
            from a support perspective. Actively coordinating with the change
            coordinators, development teams, and Vendors.
          </li>
          <li>
            Creating, coordinating, and implementing COB/DR testing activities.
          </li>
        </ul>
        <br />
      </div>
      <div className="up-box">
        <ResumeCard
          title="Education"
          // role="Software Engineer - CITIBank Investor Services project"
          dimg={edct_logo}
          dimg_siz="30:40"
          img_top="12px"
          // dur="Feb, 2015 – Apr, 2017"
        />
        <Divider />
        <br />
        <DegreeCard degree="MSc in Finance Engineering" univ="WorldQuant University" dur="Apr 2020 – Present" />
        <br />
        <DegreeCard degree="BTech in Computer Engineering" univ="Kurukshetra University" dur="July 2010 – July
        2014" />
        <br />
      </div>
      <div className="up-box">
        <ResumeCard
          title="Skills"
          dimg={skills_logo}
          dimg_siz="30:25"
          img_top="10px"
        />
        <Divider />
        <br />
        <table style={{width: "100%", marginLeft: "10px", borderSpacing:"0 1em"}}>
          <thead></thead>
          <tbody>
          <tr>
            <td className="rowTitle">Languages</td>
            <td>
              <TextChips tags="Python, Bash, HTML, CSS, C++, C, XML, Java" />
            </td>
          </tr>
          <tr>
            <td className="rowTitle">Framework/Libraries</td>
            <td><TextChips tags="Django, Flask, React, Material-UI(basics)" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Database </td>
            <td><TextChips tags="SQLite3, MongoDB, Firestore, PostgreSQL, Oracle PL/SQL" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Monitoring Tools</td>
            <td><TextChips tags="Geneos ITRS, Splunk, Nagios, Grafana, Kibana" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Version Control</td>
            <td><TextChips tags="Git, SVN, CVS" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Ticketing Tool</td>
            <td><TextChips tags="Jira, Service Now" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Job Scheduling </td>
            <td><TextChips tags="Autosys, Procmon(GS In-house), Crons" /></td>
          </tr>
          <tr>
            <td className="rowTitle">Cloud Platform </td>
            <td><TextChips tags="GCP, Firebase(all basics – personal projects)" /></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
