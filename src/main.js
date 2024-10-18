let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `p-4 bg-white shadow rounded-lg flex justify-between items-center`; 
   task.innerHTML = `
         <p class="text-lg font-semibold">${title}</p>
         <div class="flex gap-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
         </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
