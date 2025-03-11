const fs = require('fs')
const path = require('path')

/**
 * 获取指定文件夹中的图片路径
 * 
 * 本函数通过读取指定文件夹中的所有文件，筛选出其中的图片文件，并将它们的路径以数组形式返回
 * 主要解决了批量获取文件夹中图片路径的需求
 * 
 * @param {string} folderPath - 文件夹路径，用于指定需要读取的文件夹位置
 * @param {function} callback - 回调函数，用于处理结果或错误
 */
function getImagesInFolder(folderPath, callback) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'] // 常见的图片文件扩展名
  const imagePaths = []

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      callback(err, null)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file)
      imagePaths.push(file)
      console.log('filePath===', filePath)
    })

    callback(null, imagePaths)
  })
}

const folderPath = path.resolve(__dirname, './')

getImagesInFolder(folderPath, (err, imagePaths) => {
  if (err) {
    console.error('Error:', err)
    return
  }

  console.log(imagePaths)
})
