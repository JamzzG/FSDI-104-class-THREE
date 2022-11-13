function info(){
    document.getElementById("petsalon-info").innerHTML=`
    <p>
        Welcome to ${petSalon.name} located at ${petSalon.address.street} ${petSalon.address.zip}.
      </p>
      `;
}

function initInfo(){
        info();
}

window.onload=initInfo;