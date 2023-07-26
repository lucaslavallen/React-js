

    //le podemos agregar parametros a la funcion

    export function TwitterFollowCard ({ fromatUserName ,userName, name, isFollowing }) {
        console.log(isFollowing);
        const imageSrc = `https://unavatar.io/${userName}`
        
        return (
            <article className="tw-followCard">
              <header className="tw-followCard-header">
                  <img 
                  className="tw-followCard-avatar" alt="avatar azar" 
                  src= {imageSrc} />
                  <div className="tw-followCard-info">
                     <strong>{name}</strong>
                     <span className="tw-followCard-infoUserName">{fromatUserName (userName)}</span>
                  </div>
              </header>
        
              <aside>
                  <button className="tw-followCard-button">
                      Seguir
                  </button>
              </aside>
            </article>
          )  
    }
  