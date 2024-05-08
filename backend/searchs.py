from pytrends.request import TrendReq
import json

def get_searchs(keywords):
    pytrends = TrendReq()

    pytrends.build_payload(keywords, timeframe='today 12-m', geo='US')

    interest_over_time_df = pytrends.interest_over_time()

    data = []

    for col_name in interest_over_time_df.columns:
        if col_name == 'isPartial':
            continue

        dates = interest_over_time_df.index.strftime('%Y-%m-%d').tolist()

        column_data = {'dates': dates, 'searchs': interest_over_time_df[col_name].tolist()}

        data_str = json.dumps(column_data)

        data.append(data_str)

    return data