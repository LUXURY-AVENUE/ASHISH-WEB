// News API configuration
const apiKey = 'YOUR_NEWS_API_KEY'; // Yahan apni API Key daalein
const newsContainer = document.getElementById('news-section');

async function fetchTajaKhabar() {
    try {
        // India ki latest news ke liye URL
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.articles) {
            displayNews(data.articles);
        }
    } catch (error) {
        console.log("News load nahi ho payi:", error);
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = ''; // Purani khabrein hatane ke liye
    
    articles.slice(0, 6).forEach(article => { // Top 6 khabrein dikhayenge
        const newsHtml = `
            <div class="news-card">
                <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="news">
                <h3>${article.title}</h3>
                <p>${article.description || 'Puri khabar padhne ke liye click karein...'}</p>
                <a href="${article.url}" target="_blank">Puri Khabar Padhein</a>
            </div>
        `;
        newsContainer.innerHTML += newsHtml;
    });
}

// Page load hote hi news update ho jaye
window.onload = fetchTajaKhabar;
