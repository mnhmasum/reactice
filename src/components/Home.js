import React from 'react';
import '../Styles/Home.css';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.artifactslab.dictionary';

function Home() {
   return (
      <main className="dictionary-home">
         <section className="dictionary-hero" aria-labelledby="dictionary-title">
            <div className="dictionary-mark" aria-hidden="true">অa</div>
            <p className="dictionary-eyebrow">English ↔ বাংলা</p>
            <h1 id="dictionary-title">English Bangla Dictionary</h1>
            <p className="dictionary-description">
               Look up English-to-Bangla (Bengali) meanings anytime, anywhere—no internet connection required.
               Designed to be fast and lightweight, this dictionary puts 180,000+ English words right in your pocket.
            </p>
            <a
               className="dictionary-download-button"
               href={playStoreUrl}
               target="_blank"
               rel="noopener noreferrer"
            >
               Get it on Google Play
            </a>
            <p className="dictionary-platform">Available for Android</p>
         </section>

         <section className="dictionary-details" aria-labelledby="dictionary-details-title">
            <h2 id="dictionary-details-title">English to Bangla Offline Dictionary — Fast, Lightweight &amp; Reliable</h2>
            <p>
               Whether you’re reading, studying, or expanding your vocabulary, finding the right word is quick and effortless.
               Get instant auto-suggestions and smart search, hear English pronunciations, explore synonyms, browse words in
               alphabetical order, and revisit your search history or favorite words whenever you need them.
            </p>
            <h3>Key Features</h3>
            <ul className="dictionary-features">
               <li><strong>180,000+ Words:</strong> An extensive English-to-Bangla vocabulary database.</li>
               <li><strong>100% Offline Access:</strong> Search meanings without an internet connection.</li>
               <li><strong>Fast &amp; Lightweight:</strong> Quick lookups and smooth performance.</li>
               <li><strong>Smart Search &amp; Auto-Suggestions:</strong> Find words faster as you type.</li>
               <li><strong>Pronunciation:</strong> Check how English words are pronounced.</li>
               <li><strong>Synonyms:</strong> Discover related words and expand your vocabulary.</li>
               <li><strong>Favorites &amp; Search History:</strong> Bookmark important words and revisit past searches.</li>
               <li><strong>Alphabetical Sorting:</strong> Browse dictionary entries from A to Z.</li>
            </ul>
         </section>
      </main>
   );
}

export default Home;
