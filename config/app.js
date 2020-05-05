/*
|--------------------------------------------------------------------------
| Module Exports
|--------------------------------------------------------------------------
*/
	module.exports = {

		/*
		|--------------------------------------------------------------------------
		| App Config
		|--------------------------------------------------------------------------
		*/
			name: 'Microservice Auth',
			env: 'qa', // production, qa, dev,
			port: {
				dev: process.env.PORT || 4008,
				qa: process.env.PORT || 5008,
				prod: process.env.PORT || 3008,
			},

		/*
		|--------------------------------------------------------------------------
		| Token
		|--------------------------------------------------------------------------
		*/
			secret_key: 'T4pagri123#',
			token_expiration: 7, // Days
			token_algorithm: 'HS256',
		
		/*
		|--------------------------------------------------------------------------
		| Kafka Config
		|--------------------------------------------------------------------------
		*/
			kafka: {
				dev: {
					server_host: 'kafkadev.tap-agri.com:9092'
				},
				qa: {
					server_host: 'kafkaqa.tap-agri.com:9092'
				},
				prod: {
					server_host: 'kafka.tap-agri.com:9092'
				}
			},

		/*
		|--------------------------------------------------------------------------
		| URL
		|--------------------------------------------------------------------------
		*/
			url: {
				dev: {
					ldap: 'http://tap-ldapdev.tap-agri.com/login',
					microservice_auth: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-auth',
					microservice_ebcc_validation: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-ebccval',
					microservice_finding: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-finding',
					microservice_hectare_statement: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-hectarestatement',
					microservice_inspection: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-inspection',
					microservice_images: 'http://image.tap-agri.com:4012',
					microservice_reports: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-reports',
					microservice_point: 'http://app.tap-agri.com/mobileinspectiondev/ins-msa-dev-point',
					msa_internal_tap: 'http://msadev.tap-agri.com/ins/mob_ins'
					
				},
				qa: {
					ldap: 'http://tap-ldapdev.tap-agri.com/login',
					microservice_auth: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-auth',
					microservice_ebcc_validation: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-ebccval',
					microservice_finding: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-finding',
					microservice_hectare_statement: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-hectarestatement',
					microservice_inspection: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-inspection',
					microservice_images: 'http://image.tap-agri.com:5012',
					microservice_reports: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-reports',
					microservice_point: 'http://apis.tap-agri.com/mobileinspectionqa/ins-msa-qa-point',
					msa_internal_tap: 'http://msaqa.tap-agri.com/ins/mob_ins'
				},
				prod: {
					ldap: 'http://tap-ldap.tap-agri.com/login',
					microservice_auth: 'http://apis.tap-agri.com/mobileinspection/ins-msa-auth',
					microservice_ebcc_validation: 'http://apis.tap-agri.com/mobileinspection/ins-msa-ebccval',
					microservice_finding: 'http://apis.tap-agri.com/mobileinspection/ins-msa-finding',
					microservice_hectare_statement: 'http://apis.tap-agri.com/mobileinspection/ins-msa-hectarestatement',
					microservice_inspection: 'http://apis.tap-agri.com/mobileinspection/ins-msa-inspection',
					microservice_images: 'http://image.tap-agri.com:3012',
					microservice_reports: 'http://apis.tap-agri.com/mobileinspection/ins-msa-reports',
					microservice_point: 'http://apis.tap-agri.com/mobileinspection/ins-msa-point',
					msa_internal_tap: 'http://msa.tap-agri.com/ins/mob_ins'
				}
			},

		/*
		|--------------------------------------------------------------------------
		| Path
		|--------------------------------------------------------------------------
		| Config tambahan untuk mengatur jika ada path yang tidak sesuai dengan
		| parameter URL.
		*/
			path: {
				dev: 'mobileinspectiondev/ins-msa-dev-auth',
				qa: 'mobileinspectionqa/ins-msa-qa-auth',
				prod: 'mobileinspection/ins-msa-auth'
			},

		/*
		|--------------------------------------------------------------------------
		| Error Message
		|--------------------------------------------------------------------------
		*/
			error_message: {
				invalid_token: 'Token expired! ',
				invalid_request: 'Invalid Request! ',
				create_200: 'Success! ',
				create_403: 'Forbidden ',
				create_404: 'Error! Data gagal diproses. ',
				create_500: 'Error! Terjadi kesalahan dalam pembuatan data ',
				find_200: 'Success! ',
				find_403: 'Forbidden ',
				find_404: 'Error! Tidak ada data yang ditemukan ',
				find_500: 'Error! Terjadi kesalahan dalam penampilan data ',
				put_200: 'Success! ',
				put_403: 'Forbidden ',
				put_404: 'Error! Data gagal diupdate ',
				put_500: 'Error! Terjadi kesalahan dalam perubahan data ',
				delete_200: 'Success! ',
				delete_403: 'Forbidden ',
				delete_404: 'Error! Data gagal dihapus ',
				delete_500: 'Error! Terjadi kesalahan dalam penghapusan data ',
			}
	}
