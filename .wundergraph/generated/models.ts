export interface ProtectedWeatherInput {
	forCity: string;
}

export interface WeatherInput {
	forCity: string;
}

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface FakeWeatherResponse {
	data?: {
		getCityByName?: {
			id?: string;
			name?: string;
			weather?: {
				summary?: {
					title?: string;
					description?: string;
				};
			};
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface JspUsersResponse {
	data?: {
		jsp_users?: {
			id?: number;
			name?: string;
			email?: string;
			posts?: {
				id?: number;
				title?: string;
				body?: string;
			}[];
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface PastLaunchesResponse {
	data?: {
		launchesPast?: {
			mission_name?: string;
			launch_date_local?: string;
			launch_site?: {
				site_name_long?: string;
			};
			links?: {
				article_link?: string;
				video_link?: string;
			};
			rocket?: {
				rocket_name?: string;
				first_stage?: {
					cores?: {
						flight?: number;
						core?: {
							reuse_count?: number;
							status?: string;
						};
					}[];
				};
				second_stage?: {
					payloads?: {
						payload_type?: string;
						payload_mass_kg?: number;
						payload_mass_lbs?: number;
					}[];
				};
			};
			ships?: {
				name?: string;
				home_port?: string;
				image?: string;
			}[];
		}[];
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedWeatherResponse {
	data?: {
		getCityByName?: {
			name?: string;
			coord?: {
				lat?: number;
				lon?: number;
			};
			weather?: {
				summary?: {
					title?: string;
					description?: string;
					icon?: string;
				};
				temperature?: {
					actual?: number;
					min?: number;
					max?: number;
				};
				wind?: {
					speed?: number;
					deg?: number;
				};
			};
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}

export interface WeatherResponse {
	data?: {
		getCityByName?: {
			name?: string;
			coord?: {
				lat?: number;
				lon?: number;
			};
			weather?: {
				summary?: {
					title?: string;
					description?: string;
					icon?: string;
				};
				temperature?: {
					actual?: number;
					min?: number;
					max?: number;
				};
				wind?: {
					speed?: number;
					deg?: number;
				};
			};
		};
	};
	errors?: ReadonlyArray<GraphQLError>;
}
