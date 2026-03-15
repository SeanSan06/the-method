function News() {
    const updates = [
        {
            id: "idhere1",
            title: "Title goes here",
            caption: "Caption would go here",
            body: "Example text of what this thing does.",
            date: "March 10, 2026 @ 2:00 PM",
        },
        {
            id: "idhere2",
            title: "Title goes here",
            caption: "Caption would go here",
            body: "Example text of what this thing does.",
            date: "March 11, 2026 @ 3:00 PM",
        },
        {
            id: "idhere2",
            title: "Title goes here",
            caption: "Caption would go here",
            body: "Example text of what this thing does.",
            date: "March 11, 2026 @ 3:00 PM",
        },
        {
            id: "idhere2",
            title: "Title goes here",
            caption: "Caption would go here",
            body: "Example text of what this thing does.",
            date: "March 11, 2026 @ 3:00 PM",
        },
    ];

    return (
        <section id="news" aria-labelledby="news-title">
            <h1 id="news-title" className="news-title">News</h1>
            <p className="news-intro">
                Latest updates about The Method, including features, improvements, and announcements.
            </p>

            <ul className="news-grid" role="list">
                {updates.map((item) => (
                    <li key={item.id}>
                        <article className="news-card" aria-labelledby={`news-item-title-${item.id}`}>
                            <header>
                                <h2 id={`news-item-title-${item.id}`}>{item.title}</h2>
                                <p className="news-caption">{item.caption}</p>
                                <p className="news-date">
                                    <time dateTime={item.date}>{item.date}</time>
                                </p>
                            </header>
                            <p>{item.body}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default News;