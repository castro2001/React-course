import '../style/card.css';
import PropTypes from 'prop-types';
export const CardComponent = ( {title,image ,content}) => {
   
  return (
    <>


 <article className="card">
        <h1 className="card__title">{title}</h1>
        <img src={"src/assets/"+image+".jpg"} alt="" className="card__img" />
        <p className="card__content">
            {content}
        </p>
    </article>
 
    
    </>
  )
}

CardComponent.propTypes={
    title : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,

}
