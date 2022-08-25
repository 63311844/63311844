module.exports ={

    create (req,res){
        res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
    },
    
    put (req,res){
        res.send('แก้ไขข้อมูลผู้ใช้ '+JSON.stringify(req.body))
    },
    
    remove (req,res){
        res.send('ลบข้อมูลผู้ใช้ Id '+ JSON.stringify(req.body))
    },
    
    show (req,res){
        res.send('ดูข้อมูลผู้ใช้ '+JSON.stringify(req.body))
    },
    
    index (req,res){
        res.send('เรียกข้อมูลผู้ใช้ทั้งหมด')
    }

}