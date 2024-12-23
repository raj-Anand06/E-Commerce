// Initialize products array (simulate loading from data.json)
let products = [];

// Add product form submission
document.getElementById('add-product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(e.target);
  const product = {
    id: Math.floor(Math.random() * 1000), // Generate random unique ID
    name: formData.get('name'),
    price: {
      oldPrice: parseFloat(formData.get('oldPrice')),
      newPrice: parseFloat(formData.get('newPrice')),
    },
    discount: parseInt(formData.get('discount')),
    img: {
      singleImage: formData.get('singleImage'),
      thumbs: formData.get('thumbs').split(',').map((img) => img.trim()),
    },
    category: formData.get('category'),
    rating: parseFloat(formData.get('rating')),
    productId: formData.get('productId'),
    inStockValue: parseInt(formData.get('inStockValue')),
    soldStockValue: parseInt(formData.get('soldStockValue')),
    visibility: formData.get('visibility'),
  };

  // Add new product to the array
  products.push(product);

  // Notify the user
  alert('Product added successfully!');

  // Clear the form
  e.target.reset();

  // Automatically download updated JSON file
  downloadJSONFile(products, 'data.json');
});

// Function to download JSON file
function downloadJSONFile(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
