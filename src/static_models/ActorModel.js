class ActorModel{





	static async create(){
		try{
					const duplicateCheck = await db.query(`SELECT __________ FROM orders WHERE __________=$1`)
			   	if(duplicateCheck.rows[0])
						throw new BadRequestError(`Duplicate Order details: ${data.order_id}`)
					const result = await db.query('INSERT INTO ___ VALUES____ RETURNING',[])

					const newRecord = result.rows[0]

					return newRecord
					

		}catch(error){
			console.log(error)
		}
	}

	static async getAll(){
		try{
				const result = await db.query('SELECT * FROM _____________')
			    return result.rows
		}catch(error){
			console.log(error)
		}
	}


		static async getById(){
		try{

		}catch(error){
			console.log(error)
		}
	}


		static async update(){
		try{

		}catch(error){
			console.log(error)
		}
	}


		static async remove(Id){
		try{
				const result = await db.query(`DELETE FROM _____ WHERE ___ = $1
					RETURNING ___`,[Id])
				const order = result.rows[0]
				if(!___) throw new NotFoundError(`no ___ found:${___}`)

		}catch(error){
			console.log(error)
		}
	}

	// 	static async save(){
	// 	try{

	// 	}catch(error){
	// 		console.log(error)
	// 	}
	// }












}

module.exports = ActorModel