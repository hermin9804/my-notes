<%* 
const folders = tp.file.folder(true).split('/'); 
const parentFolderName = folders[folders.length - 1]; 
const fileName = "_tasks_" + parentFolderName;

await tp.file.rename(fileName);
%> 
- [ ] #task <% parentFolderName %> tasks 작성
