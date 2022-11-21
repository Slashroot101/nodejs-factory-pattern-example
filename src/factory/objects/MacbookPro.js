const MacbookPro = function({cpu, gpu, memoryGigs}){
  this.cpu = cpu || 0;
  this.gpu = gpu || 0;
  this.memoryGigs = memoryGigs || 0;
}

module.exports = MacbookPro;