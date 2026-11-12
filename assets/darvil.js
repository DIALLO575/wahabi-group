(function(){
  "use strict";
  const root=document.querySelector("[data-darvil-directory]");
  if(!root)return;
  const cardsContainer=root.querySelector("[data-supplier-grid]");
  const cards=Array.from(cardsContainer.querySelectorAll("[data-supplier]"));
  const search=root.querySelector("[data-supplier-search]");
  const filters=Array.from(root.querySelectorAll("[data-supplier-filter]"));
  const sort=root.querySelector("[data-supplier-sort]");
  const counter=root.querySelector("[data-supplier-count]");
  const empty=root.querySelector("[data-supplier-empty]");
  const reset=root.querySelector("[data-supplier-reset]");
  const categorySelect=document.getElementById("darvil-category");
  const productInput=document.getElementById("darvil-product");
  const form=document.getElementById("darvil-inquiry-form");
  const status=document.getElementById("darvil-form-status");
  let currentFilter="all";

  const normalize=value=>String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
  const keyOf=card=>normalize(card.dataset.name+" "+card.dataset.region+" "+card.dataset.category+" "+card.dataset.keywords+" "+card.textContent);
  const indexed=cards.map((card,index)=>({card,index,query:keyOf(card)}));

  function refresh(){
    const query=normalize(search.value);
    let visible=0;
    for(const item of indexed){
      const matchesCategory=currentFilter==="all"||item.card.dataset.category===currentFilter;
      const matchesText=!query||item.query.includes(query);
      const show=matchesCategory&&matchesText;
      item.card.hidden=!show;
      if(show)visible++;
    }
    const sortBy=sort.value;
    const ordered=indexed.slice().sort((a,b)=>{
      if(sortBy==="name")return a.card.dataset.name.localeCompare(b.card.dataset.name,"fr");
      if(sortBy==="city")return a.card.dataset.region.localeCompare(b.card.dataset.region,"fr")||a.index-b.index;
      return a.index-b.index;
    });
    for(const item of ordered)cardsContainer.appendChild(item.card);
    counter.textContent=visible+" fournisseur"+(visible===1?"":"s")+" affiché"+(visible===1?"":"s");
    empty.hidden=visible!==0;
  }

  filters.forEach(button=>button.addEventListener("click",()=>{
    currentFilter=button.dataset.supplierFilter;
    filters.forEach(chip=>{
      const selected=chip===button;
      chip.classList.toggle("is-active",selected);
      chip.setAttribute("aria-pressed",String(selected));
    });
    refresh();
  }));
  search.addEventListener("input",refresh);
  sort.addEventListener("change",refresh);
  reset.addEventListener("click",()=>{
    search.value="";sort.value="default";
    filters.find(button=>button.dataset.supplierFilter==="all")?.click();
    search.focus();
  });

  document.querySelectorAll("[data-prefill-category]").forEach(link=>{
    link.addEventListener("click",()=>{
      if(categorySelect)categorySelect.value=link.dataset.prefillCategory;
      if(productInput&&link.dataset.prefillProduct)productInput.value=link.dataset.prefillProduct;
    });
  });

  if(form){
    form.addEventListener("submit",event=>{
      event.preventDefault();
      if(!form.reportValidity())return;
      const data=new FormData(form);
      const name=String(data.get("name")||"").trim();
      const email=String(data.get("email")||"").trim();
      const category=String(data.get("category")||"").trim();
      const product=String(data.get("product")||"").trim();
      const quantity=String(data.get("quantity")||"").trim();
      const notes=String(data.get("notes")||"").trim();
      const subject="Demande de sourcing DARVIL — "+product.slice(0,90);
      const body=[
        "Bonjour DARVIL,","",
        "Je souhaite échanger au sujet d'un approvisionnement international.","",
        "Nom / entreprise : "+name,
        "Adresse e-mail : "+email,
        "Catégorie : "+category,
        "Produit recherché : "+product,
        "Quantité indicative : "+(quantity||"À définir"),
        "Détails : "+(notes||"À préciser"),"",
        "Merci de me contacter pour étudier la faisabilité et les conditions."
      ].join("\n");
      status.textContent="Votre messagerie va s'ouvrir avec le message préparé. Aucun formulaire n'est envoyé directement depuis ce site.";
      window.location.href="mailto:contact@wahabifils.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
    });
  }
  refresh();
})();