import React from 'react';
import '../Styles/Home.css';


function App() {
   return (
      <div className="App">
         <header className="App-header">
            <div className='App-header title'>Nazmul Hasan <span>Masum</span></div>
            <div className='subtitle'>Senior Software Engineer</div>

            <div className="horizontal-point" style={{ marginTop: '8px' }}>
               <div><i className="fas fa-envelope mobile-icon"></i> <a href="mailto:mnhmasum@gmail.com"> mnhmasum@gmail.com</a></div>
               <div><i className="fas fa-mobile-alt mobile-icon"></i> <a href="https://wa.me/+8801911291186"> +8801911291186</a></div>
               <div><i className="fas fa-map-marker-alt mobile-icon"></i><a href="https://wa.me/+8801911291186">Dhaka, Bangladesh</a></div>
            </div>
         </header>

         <section>
            <div className="horizontal-point" >
               <div><a href="https://www.linkedin.com/in/nazmul-hasan-masum"><i className="fab fa-linkedin social-icon"></i></a></div>
               <div><a href="https://github.com/mnhmasum"><i className="fab fa-github social-icon"></i></a></div>
               <div><a href="https://stackoverflow.com/users/4384513/masum"><i className="fab fa-stack-overflow social-icon"></i></a></div>
               <div><a href="https://medium.com/@mnhmasum"><i className="fab fa-medium social-icon"></i></a></div>
               <div style={{ marginTop: '10px' }}>
                  <a href="https://leetcode.com/u/mnhmasum/">
                     <img width="30" height="30" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
                  </a>
               </div>

            </div>
         </section>

         <section>
            <div className="headline-medium">Summary</div>
            <div>
               I specialize in developing a wide range of applications,
               including smartphone apps, IoT solutions, web applications, and desktop software. My passion lies in working with
               diverse technologies and languages such as Java, Kotlin, ReactJs, Dart, Python, and PHP. I possess a strong
               understanding of application development, architectural patterns, design patterns, and design principles.
            </div>
         </section>

         <section>
            <div className="headline-medium">Skills:</div>
            <div>
               <ul style={{ margin: 0 }}>
                  <li>Languages: Java, Kotlin, Python, PHP, JavaScript.</li>
                  <li>Architecure: MVP, MVVM, Multi-Modular, MVC(web).</li>
                  <li>Frameworks & Libraries: Dagger2, Hilt, RxJava, ReactJs, React Native, Flutter, Tensorflow.</li>
                  <li>Web Development: CodeIgniter (PHP Framework), Bootstrap (CSS Framework), JS Frameworks (jQuery, ReactJs).</li>
                  <li>Databases: MySQL, SQLite, Oracle.</li>
                  <li>Version Control: Git, SVN.</li>
                  <li>Others: WebSocket, SignalR, Google Firebase, Google GeoFence, Kotlin DSL.</li>
                  <li>Protocol: GATT (for Bluetooth Low Energy), TCP/IP, ZWave.</li>
               </ul>
            </div>
         </section>

         <section>
            <div className="headline-medium">Experience</div>
            <div className='job'>
               <div className='company-title'>Adaptive Enterprise Limited</div>
               <div className='designation'>Senior Software Engineer <span className='duration'>• May 2018 - Present (7 years 3 months)</span></div>
               <ul>
                  <li> IoT Integration: Developed smart home automation system using smart node device based on Z-Wave and Bluetooth low energy protocol</li>
                  <li> Geofencing: Implemented location-based services to enhance application functionalities</li>
                  <li> Network Communication: Ensured reliable and secure communication using TCP/IP protocols</li>
                  <li> Android Development: Led projects using MVP and MVVM for clean architecture</li>
                  <li> Reactive Programming: Utilized RxJava for managing asynchronous data and events</li>
                  <li> Java to Kotlin Migration: Converted complex app from Java to Kotlin, improving performance</li>
                  <li> Project Leadership: Led projects from concept to deployment, coordinating cross-functional teams</li>
                  <li> Code Reviews and Mentorship: Conducted code reviews and mentored junior developers</li>
                  <li> SDK Development: Architected and maintained a robust SDK for Napco smart locks, providing secure APIs, BLE communication, and integration tools for external developers</li>
               </ul>
            </div>
            <div className='job margintop-for-print-mid'>
               <div className='company-title'>Augmedix</div>
               <div className='designation'>Senior Software Engineer <span className='duration'>• April 2017 - March 2018 (1 year)</span></div>
               <ul>
                  <li> Developed applications for Google Glass and Android smartphones</li>
                  <li> Contributed key features to the main application</li>
                  <li> Implemented POC in a Google Glass alternative device</li>
                  <li> Conducted research on emerging smart glasses technologies</li>
                  <li> Developed GUI based application to reduce ADB command line dependencies</li>
                  <li> Engaged in extensive memory optimization efforts in the main application</li>
               </ul>
            </div>

            <div className='job'>
               <div className='company-title'>ChefOnline</div>
               <div className='designation'>Android Developer <span className='duration'>• March 2015 - December 2016 (1 year 10 months)</span></div>
               <ul>
                  <li> Developed FOOD online order app with Android MVP pattern, SignalR, Firebase push notification, and payment gateway</li>
                  <li> Implemented auto order system for Android POS device, ensuring efficient order management and delivery</li>
                  <li> Integrated SignalR for real-time communication, enhancing user experience and order processing</li>
                  <li> Utilized Firebase push notification for timely updates</li>
                  <li> Integrated third-party payment gateway for secure and convenient payments</li>
                  <li> Designed custom components for intuitive UI</li>
               </ul>
            </div>

            <div className='job'>
               <div className='company-title'>Atomix System Ltd.</div>
               <div className='designation'>Programmer <span className='duration'>• March 2014 - February 2015 (1 Year)</span></div>
               <ul>
                  <li> Developed and maintained native Android apps for phones and tablets</li>
                  <li> Integrated third-party libraries, APIs, and Google Maps</li>
                  <li> Employed background tasks and services for optimization</li>
                  <li> Collaborated with teams, conducted code reviews, and provided feedback</li>
               </ul>
            </div>

            <div className='job'>
               <div className='company-title'>VU Mobile Ltd (ZED Group)</div>
               <div className='designation'>Software Engineer <span className='duration'>• November 2012 - March 2014 (1 year 4 months)</span></div>
               <ul>
                  <li> Developed streaming app with content download for offline viewing</li>
                  <li> Integrated VAS services for personalized recommendations, in-app purchases, and subscriptions</li>
                  <li> Collaborated with content providers for high-quality streaming content</li>
                  <li> Utilized analytics and user feedback to improve app performance</li>
               </ul>
            </div>

         </section>

         <section>
            <div className="headline-medium">Certifications</div>
            <div>
               <div className='mid-bold'>Oracle Certified Professional, Java SE 6 Programmer(OCPJP)</div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Oracle</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://www.credly.com/badges/0d99b65e-5825-49c1-8766-79deaebb5384">OC1661596</a></div>
            </div>

            <div className='top-gap margintop-for-print-mid'>
               <div className='mid-bold'>Kotlin for Java Developers</div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://www.coursera.org/account/accomplishments/certificate/7Y38Y4TGG9RR">7Y38Y4TGG9RR</a></div>
            </div>

            <div className="top-gap">
               <div className='mid-bold'>Python 3 Programming</div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://coursera.org/share/f22b60ac1d6d082bce667c17fa584c26">FAPHYQ3S2DYU</a></div>
            </div>

            <div className="top-gap">
               <div className='mid-bold'>Supervised Machine Learning: Regression and Classification</div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://coursera.org/share/88173471304c98931c7e24144f93ff02">FB9ZYHWWYI0F</a></div>
            </div>

            <div className='top-gap'>
               <div className='mid-bold'><span>Math for Data Science</span></div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://www.coursera.org/account/accomplishments/certificate/BS9JTGN3DR5G">BS9JTGN3DR5G</a></div>
            </div>

            <div className='top-gap'>
               <div className='mid-bold'><span>Engineering Maintainable Android Apps</span></div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://www.coursera.org/account/accomplishments/certificate/GE74N4AL9UW8">GE74N4AL9UW8</a></div>
            </div>
         
            <div className='top-gap'>
               <div className='mid-bold'><span>Introduction to CSS3</span></div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://coursera.org/share/63ce1da4e1179bd8aa435b394d1df8ac">G5UW3MGBBWQB</a></div>
            </div>

            <div className='top-gap'>
               <div className='mid-bold'><span>Version Control</span></div>
               <div className='secondary-title'>Issued By: <span className='mid-bold'>Coursera</span></div>
               <div className='secondary-title'>Credential Id: <a href="https://www.coursera.org/account/accomplishments/verify/HN276GWES45G">HN276GWES45G</a></div>
            </div>

         </section>

         <section>
            <div className="headline-medium">Projects</div>
            <div className='bottom-gap'>
               <div className='headline-small'>Gemini Commercial Security</div>
               <div>It&apos;s a complete home automation system based on Zwave, Blutooth Low energy, TCP/IP protocol. Integrated Access Control Systems from 8 to 255 zones/points. The App is supported on phones/smart devices for universality.</div>
               <div className='secondary-title'>Website: <a href="https://t.ly/gFWy8">App Download Link</a></div>
            </div>   

            <div className='bottom-gap'>
               <div className='headline-small'>Napco iLockSDK</div>
               <div>The Napco ILockSDK provides a comprehensive framework for connecting, controlling, and managing Napco smart locks using Bluetooth in your Android app. It handles credential decoding, lock operations, and status monitoring so you can focus on your app’s UI and business logic.</div>
               <div className='secondary-title'>Website: <a href="https://napcodev.github.io/ilocksdkandroiddocs/">SDK Download & Documentation Link</a></div>
            </div>

            <div className='bottom-gap'>
               <div className='headline-small'>Citywide iLock</div>
               <div>iLock application is used to control AlarmLock Bluetooth enabled Locks. This iLock app can be use in place of a proximity credential.</div>
               <div className='secondary-title'>Website: <a href="https://play.google.com/store/apps/details?id=com.napcosecurity.ilockcitylink">App Download Link</a></div>
            </div>

            <div className='bottom-gap'>
               <div className='headline-small'>iSecure Alarm Security</div>
               <div>iSecure Smart Consumer App provides Security and Connected Home Control + Notification Alerts for multiple consumers within a protected premises/household.</div>
               <div className='secondary-title'>Website: <a href="https://play.google.com/store/apps/details?id=com.napcosecurity.iBridge2.isecure">App Download Link</a></div>
            </div>

            <div className='bottom-gap'>
               <div className='headline-small'>ChefOnline - Online Takeaways</div>
               <div>The perfect online food ordering app, designed to bring your favourite takeaway straight to you in just three simple step</div>
               <div className='secondary-title'>Website: <a href="https://play.google.com/store/apps/details?id=com.chefonline.chefonline">App Download Link</a></div>
            </div>

            <div className='bottom-gap'>
               <div className='headline-small'>BLE Peripheral Scanner</div>
               <div>BLE Device Scanner is an Android app designed to find nearby Bluetooth Low Energy (BLE) enabled peripheral devices and perform read, write, notify and indiacation operation on connected peripheral devices. It features continuous scanning and demonstrates a multi-module architecture using MVVM, Kotlin, Hilt, Jetpack Compose and Unit Test.</div>
               <div className='secondary-title'>Website: <a href="https://github.com/mnhmasum/ble-device-scanner">Repository Link</a></div>
            </div>

            <div className='bottom-gap'>
               <div className='headline-small'>ChefOnline Partner</div>
               <div>The ChefOnline Partner app is the answer to everything you need for your restaurant management. We have a variety of services for restaurant owners throughout the UK to promote the craft of great eating. Join our platform and be among the top restaurant businesses with diverse cuisine types from all across the country.</div>
               <div className='secondary-title'>Website: <a href="https://play.google.com/store/apps/details?id=com.lechef.SRSITAPP">App Download Link</a></div>
            </div>

         </section>

         <section>
            <div className="headline-medium">Education</div>
            <div>
               <li><span>B.Sc. Computer Science and Engineering </span>, Bangladesh University (2011 - 2014) • CGPA 3.64 (Scale out of 4.0)</li>
               <li><span>Diploma in Computer Technology</span>, Dhaka Polytechnic Institute (2006 - 2010) • CGPA 3.55 (Scale out of 4.0)</li>
            </div>
         </section>
      </div>
   );
}

export default App;
