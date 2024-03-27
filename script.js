document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const prenom = document.getElementById("first-name").value.trim();
    const nom = document.getElementById("last-name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!prenom || !nom || !message) {
      document.getElementById("error-message").style.display = "block";
      return;
    }

    const nouveauCommentaire = `
            <div class="flex space-x-4 text-sm text-gray-500">
                <div class="flex-1 py-10 border-t border-gray-200">
                    <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
                    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                        <p>${message}</p>
                    </div>
                </div>
            </div>
        `;

    const listeCommentaires = document.getElementById("comment-list");
    listeCommentaires.insertAdjacentHTML("beforeend", nouveauCommentaire);

    form.reset();

    document.getElementById("error-message").style.display = "none";
  });
});
