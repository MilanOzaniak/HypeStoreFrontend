export default function validateCreate(title, price, category, size, description) {
    const error = {
      title: '',
      price: '',
      category: '',
      size: '',
      description: '',
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

    return {valid, error};
}