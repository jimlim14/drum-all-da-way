function handleGetStarted() {
  return document
    .getElementById('footer')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

module.exports = {handleGetStarted};