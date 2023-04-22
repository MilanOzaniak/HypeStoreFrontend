export default function validateCreate(title, price, category, size, description, location, gender) {
    const error = {
      title: '',
      price: '',
      category: '',
      size: '',
      description: '',
      location: '',
      gender: ''
    };

    let valid = true

    if (!title) {
        error.title =  'Please enter a title!';
        valid = false;
      }
  
      if (!price) {
        error.price =  'Please enter a price!';
        valid = false;
      }
  
      if (!category) {
        error.category =  'Please enter a category!';
        valid = false;
      }
  
      if (!size) {
        error.size =  'Please enter a size!';
        valid = false;
      }
  
      if (!description) {
        error.description =  'Please enter a description!';
        valid = false;
      }

      if(!location){
        error.location = 'Please enter a location!';
        valid = false;
      }

      if(!gender){
        error.gender = 'Please enter a gender!';
        valid = false;
      }

    return {valid, error};
}