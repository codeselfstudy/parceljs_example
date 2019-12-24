export default function Cat(cat) {
    return `
        <div class="cat card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img
                                src="${cat.pic}"
                                alt="${cat.name}"
                            />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${cat.name} (${cat.age})</p>
                        <p class="subtitle is-6">@${cat.name.replace(/ /, "").toLowerCase()} (tel: ${cat.phoneNumber})</p>
                    </div>
                </div>

                <div class="content">
                    <blockquote className="quote">"${cat.quote}"</blockquote>
                </div>
            </div>
        </div>
    `;
}
