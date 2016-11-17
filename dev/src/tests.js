/*

███████╗██████╗ ██╗████████╗    ███╗   ███╗███████╗       ██╗ 
██╔════╝██╔══██╗██║╚══██╔══╝    ████╗ ████║██╔════╝    ██╗╚██╗
█████╗  ██║  ██║██║   ██║       ██╔████╔██║█████╗      ╚═╝ ██║
██╔══╝  ██║  ██║██║   ██║       ██║╚██╔╝██║██╔══╝      ██╗ ██║
███████╗██████╔╝██║   ██║       ██║ ╚═╝ ██║███████╗    ╚═╝██╔╝
╚══════╝╚═════╝ ╚═╝   ╚═╝       ╚═╝     ╚═╝╚══════╝       ╚═╝ 
  
Edit this JS file to change any data you want displayed on the PDF

*/

function loadTestData(){

	//Uncomment below and you can erase this line
	$("#pdf_job2, #pdf_job3").hide();


	//PDF Testing, filler info
	$("#pdf_name").html("James Bannister");
	$("#pdf_email").html("james@bannister.me");
	$("#pdf_phone").html("0474 728 430");
	$("#pdf_location").html("Brisbane, Australia");
	$("#pdf_link").html("<a href='https://bannister.me'>https://bannister.me</a>");
	$("#pdf_linkedin").html("<a href='https://linkedin.com/in/jamesebannister'>https://linkedin.com/in/jamesebannister</a>");
	$("#pdf_statement_title").html("Professional Summary");
	$("#pdf_statement").html("A self-driven individual who is always hungry for a challenge. I have a history in a range of different industries and have worked with an array of different technologies within these. I have a track record of success within each of these jobs and am always looking for ways to improve both myself and the job at hand. I have a strong background with technology, including a degree in Information Systems and e-Commerce, which I have used to build upon my extensive experience in customer service. This has given me the ability to be an effective team member and leader, and a driver for continuous improvement related to technology and the delivery of first class experiences.");
	
	$("#job_1_employer").html("Trade Me");
	$("#job_1_loc").html("Wellington, New Zealand");
	$("#job_1_time").html("February 2014 - September 2016");
	$("#pdf_job1_emp_desc").html("The eBay of New Zealand, handling half of New Zealand's daily internet traffic. An NZX Top 50 company.");
	$("#job1_title").html("Team Leader");
	$("#pdf_job1_job_desc").html("I led one of four teams in the Customer Support division where I was responsible for making sure Trade Me’s 3.7 million customers receive outstanding, world class customer support, 24/7, 365 days of the year.<br/>I was also solely responsible for data and analytics inside my business unit, which is used for a wide range of forecasting, decision making, resource planning, impact analysis and project work.<br/><b>Key duties of this role included:</b><ul><li>Meeting customer satisfaction benchmarks</li><li>Developing customer service strategy</li><li>Coaching and development</li><li>Managing internal relationships with other parts of the business to ensure everyone is always up-to-speed with the fast paced environment we work in</li><li>Team management and engagement</li><li>Producing reports that require data & analytics, or statistical interpretation, for internal and external stakeholders</li></ul>");
	
	$("#job_2_employer").html("Ticketek");
	$("#job_2_loc").html("Wellington, New Zealand");
	$("#job_2_time").html("August 2012 - January 2014");
	$("#pdf_job2_emp_desc").html("The largest of three New Zealand ticketing agencies, dominating the Wellington ticketing market, which hosts a range of venues and the companies national contact centre.");
	$("#job2_title").html("Lead Supervisor");
	$("#pdf_job2_job_desc").html("I was responsible for numerous activities relating to the provision of customer service; including leading and coordination of staff and other supervisors at both events and a call centre, agency support and troubleshooting, customer service, and dispatch of tickets and documents to customers.");
	
	$("#job_3_employer").html("Caltex Hyderabad");
	$("#job_3_loc").html("Napier, New Zealand");
	$("#job_3_time").html("2009-2011");
	$("#pdf_job3_emp_desc").html("Local petrol station and truck stop, located on a busy Napier street. Open 24/7 365.");
	$("#job3_title").html("Team Leader");
	$("#pdf_job3_job_desc").html("Responsible for opening and closing of the store as well as the day to day running of the shift; including the supervision of multiple staff members, training, stock coordination, and reporting.");
	
	$("#job_4_employer").html("News Corp Australia");
	$("#job_4_loc").html("Brisbane, Australia");
	$("#job_4_time").html("September 2016 - Current (fixed term contract)");
	$("#pdf_job4_emp_desc").html("News Corp Australia is one of Australia's largest media companies, employing more than 8,000 staff nationwide and approximately 3,000 journalists.");
	$("#job4_title").html("Real Time Analyst");
	$("#pdf_job4_job_desc").html("Working as part of the Workforce Planning Team, I am solely responsible for the Direct Sales team in Queensland - comprised of around 40-50 staff. I manage all intraday processes to achieve the optimum service levels, maximise efficiencies and occupancy rates. This involves the real time monitoring of call centre staff ensuring adherence to their schedules, on the day schedule changes and management of daily exceptions.");

	$("#job_5_employer").html("Freelance Web Design & Development");
	$("#job_5_loc").html("New Zealand & Australia");
	$("#job_5_time").html("2013 - Present");
	$("#pdf_job5_emp_desc").html("Hobby turned part time profession. Working on both personal projects and client projects through referrals.");
	$("#job5_title").html("Web Developer and Server Administrator");
	$("#pdf_job5_job_desc").html("I specialise in PHP development, predominantly using MVC frameworks like Laravel, and am familiar using a wide range of technologies and platforms.<br/>In my personal time I will usually have a few projects on the go; the biggest of which is <a href=\"https://fiverp.net\">FiveRP</a>; an online mod and gamemode for Grand Theft Auto V. Rolling Stone recently <a href=\"http://www.rollingstone.com/culture/news/how-modders-are-making-gta-v-into-role-players-paradise-w441501\">wrote an article about this</a>. The project has seen me build a full web application from the ground up, solo, write a full API to hook in to the game, and consume numerous APIs to provide a more realistic element to the game and improve the web application. Outside of the web application, development takes a collaborative approach, using agile methodologies, and utilises numerous technologies.<br/>Other personal projects include:<br/><ul><li>A live Facebook reaction counter built in Vue</li><li>Year in Review app, a visualisation of statistics on how teams and individuals performed over a year; use Chart.js to display this visually</li><li>Reminder app, simply tell it when to remind you and it will send you an email at that time (calculates timezones to work for everyone, anywhere in the world</li><li>Smart Mirror application to display time, weather, and scrolling news feed; allows you to get ready by seeing all the information you need in the morning along with your reflection</li><li>Slack Bot integration to provide daily updates on site and user statistics</li><li>Laravel and Vue real time search application; updates a list of users as you type</li><li>Laravel weather app, detects location from IP and provides weather forecast, allows for location and day to be optionally provided and then uses that for the forecast</li></ul><br/>From a professional perspective, I have done work for 4 companies/clients which has ranged from setting them up on a CMS, configuring e-Commerce solutions, and also builiding a custom website from scratch.");

	$("#pdf_degree").html("Bachelor of Commerce");
	$("#pdf_school").html("Victoria University of Wellington");
	$("#pdf_school_loc").html("Wellington, New Zealand");
	$("#pdf_graduation").html("2014");
	$("#pdf_gpa").html("6.5 GPA");
	$("#pdf_school_desc").html("Victoria University of Wellington is ranked number one in New Zealand, and is ranked 229th equal internationally. I majored in Information Systems and e-Commerce, achieving an A-/A average across my majors, and a B+/A- average for my degree overall.");

	$("#pdf_awards").html("<b>Trade Me</b><ul><li>The Leadership Kev 2015</li><li>CS Superstar New Starter (finalist) 2014</li></ul><b>Victoria University of Wellington</b><ul><li>1st Place - Deloitte VUW Business Case Competition 2014</li></ul><b>Napier Boys' High School</b><ul><li>Prefect and House Captain 2011</li><li>Storkey Award for Citizenship (scholarship) 2011</li><li>Ken Spillar Cup for Active Community Service 2010</li><li>Storkey Award for General Excellence 2008</li></ul>");

	user_skills="Team Leadership, Customer Service, Web Architecture & Development, Data & Analytics, Microsoft Office"
	user_skills_split = user_skills.replace(/,/g, '<span class="skillbullet"> \u2219 </span>');
	$("#pdf_skills").html(user_skills_split);

	$("#pdf_job2").show();
	$("#pdf_job3").show();
}