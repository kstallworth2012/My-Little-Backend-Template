class CustomerModel{

/*

CREATE TABLE public.customer (
    customer_id integer DEFAULT nextval('public.customer_customer_id_seq'::regclass) NOT NULL,
    store_id smallint NOT NULL,
    first_name character varying(45) NOT NULL,
    last_name character varying(45) NOT NULL,
    email character varying(50),
    address_id smallint NOT NULL,
    activebool boolean DEFAULT true NOT NULL,
    create_date date DEFAULT ('now'::text)::date NOT NULL,
    last_update timestamp without time zone DEFAULT now(),
    active integer
);
*/




	static async create(){
		try{
					const duplicateCheck = await db.query(`SELECT __________ FROM orders WHERE __________=$1`)
			   	if(duplicateCheck.rows[0])
						throw new BadRequestError(`Duplicate Order details: ${data.order_id}`)
					const result = await db.query('INSERT INTO customer (customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active)
					 VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING customer_id',[])

					const newRecord = result.rows[0]

					return newRecord
					

		}catch(error){
			console.log(error)
		}
	}

	static async getAll(){
		try{
				const result = await db.query('SELECT * FROM customer')
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

module.exports = CustomerModel