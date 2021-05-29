const frm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const tp = (s) => {
  const html = `
    <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <span>${s}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;
  list.innerHTML += html;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = frm.add.value.trim();
  if (todo.length) {
    tp(todo);
    frm.reset();
  }
});

// delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = (tp) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(tp);
    })
    .forEach((todo) => {
      todo.classList.add("d-none");
    });

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(tp);
    })
    .forEach((todo) => {
      todo.classList.remove("d-none");
    });
};

search.addEventListener("keyup", (e) => {
  // e.preventDefault();
  const tp = search.value.trim().toLowerCase();
  filterTodo(tp);
});
